import NoxiousotUsaServerKeywordPage, { generateMetadata } from './noxiousot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotUsaServerKeywordPage />;
}
