import ThaisotCommandsKeywordPage, { generateMetadata } from './thaisot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotCommandsKeywordPage />;
}
