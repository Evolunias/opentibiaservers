import TibiaraCommandsKeywordPage, { generateMetadata } from './tibiara-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraCommandsKeywordPage />;
}
