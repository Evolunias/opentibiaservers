import PvpeMistOfDeathServerKeywordPage, { generateMetadata } from './pvpe-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeMistOfDeathServerKeywordPage />;
}
