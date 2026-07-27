import MiracleCommandsKeywordPage, { generateMetadata } from './miracle-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleCommandsKeywordPage />;
}
