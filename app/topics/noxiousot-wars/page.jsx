import NoxiousotWarsKeywordPage, { generateMetadata } from './noxiousot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotWarsKeywordPage />;
}
