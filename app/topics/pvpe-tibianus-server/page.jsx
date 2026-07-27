import PvpeTibianusServerKeywordPage, { generateMetadata } from './pvpe-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibianusServerKeywordPage />;
}
