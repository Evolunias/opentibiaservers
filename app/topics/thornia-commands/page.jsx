import ThorniaCommandsKeywordPage, { generateMetadata } from './thornia-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaCommandsKeywordPage />;
}
