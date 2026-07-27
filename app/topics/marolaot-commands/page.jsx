import MarolaotCommandsKeywordPage, { generateMetadata } from './marolaot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotCommandsKeywordPage />;
}
