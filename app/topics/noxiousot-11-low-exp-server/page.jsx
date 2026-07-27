import Noxiousot11LowExpServerKeywordPage, { generateMetadata } from './noxiousot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot11LowExpServerKeywordPage />;
}
