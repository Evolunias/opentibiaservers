import Unline12RetroServerKeywordPage, { generateMetadata } from './unline-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12RetroServerKeywordPage />;
}
