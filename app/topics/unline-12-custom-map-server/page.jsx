import Unline12CustomMapServerKeywordPage, { generateMetadata } from './unline-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12CustomMapServerKeywordPage />;
}
