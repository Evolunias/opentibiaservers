import OlderaCommandsKeywordPage, { generateMetadata } from './oldera-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaCommandsKeywordPage />;
}
