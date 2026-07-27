import Unline12EvoServerKeywordPage, { generateMetadata } from './unline-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12EvoServerKeywordPage />;
}
