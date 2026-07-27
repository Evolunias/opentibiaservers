import Carlinot14LowExpServerKeywordPage, { generateMetadata } from './carlinot-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14LowExpServerKeywordPage />;
}
