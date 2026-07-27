import NoxiousotFranceServerKeywordPage, { generateMetadata } from './noxiousot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotFranceServerKeywordPage />;
}
