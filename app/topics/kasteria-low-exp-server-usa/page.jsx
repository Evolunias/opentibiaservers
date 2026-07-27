import KasteriaLowExpServerUsaKeywordPage, { generateMetadata } from './kasteria-low-exp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaLowExpServerUsaKeywordPage />;
}
