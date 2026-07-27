import Unline12NoResetServerKeywordPage, { generateMetadata } from './unline-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12NoResetServerKeywordPage />;
}
