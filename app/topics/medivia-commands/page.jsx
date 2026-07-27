import MediviaCommandsKeywordPage, { generateMetadata } from './medivia-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCommandsKeywordPage />;
}
