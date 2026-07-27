import Carlinot12LowExpServerKeywordPage, { generateMetadata } from './carlinot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12LowExpServerKeywordPage />;
}
