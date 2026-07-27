import MiracleMexicoServerKeywordPage, { generateMetadata } from './miracle-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleMexicoServerKeywordPage />;
}
