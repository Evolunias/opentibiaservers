import MiracleBrazilServerKeywordPage, { generateMetadata } from './miracle-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleBrazilServerKeywordPage />;
}
