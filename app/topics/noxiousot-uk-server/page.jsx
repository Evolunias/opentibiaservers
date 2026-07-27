import NoxiousotUkServerKeywordPage, { generateMetadata } from './noxiousot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotUkServerKeywordPage />;
}
