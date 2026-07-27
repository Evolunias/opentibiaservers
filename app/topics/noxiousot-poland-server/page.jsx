import NoxiousotPolandServerKeywordPage, { generateMetadata } from './noxiousot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotPolandServerKeywordPage />;
}
