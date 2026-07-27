import Carlinot13LowExpServerKeywordPage, { generateMetadata } from './carlinot-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13LowExpServerKeywordPage />;
}
