import PvpeMadnessaliveServerKeywordPage, { generateMetadata } from './pvpe-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeMadnessaliveServerKeywordPage />;
}
