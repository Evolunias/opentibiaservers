import Carlinot11LowExpServerKeywordPage, { generateMetadata } from './carlinot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11LowExpServerKeywordPage />;
}
