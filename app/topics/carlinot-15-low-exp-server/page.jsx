import Carlinot15LowExpServerKeywordPage, { generateMetadata } from './carlinot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15LowExpServerKeywordPage />;
}
