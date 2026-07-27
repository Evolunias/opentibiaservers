import DuraOnlineBrazilServerKeywordPage, { generateMetadata } from './dura-online-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineBrazilServerKeywordPage />;
}
