import MiracleMexicoServersKeywordPage, { generateMetadata } from './miracle-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleMexicoServersKeywordPage />;
}
