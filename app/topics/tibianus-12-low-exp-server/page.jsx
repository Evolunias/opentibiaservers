import Tibianus12LowExpServerKeywordPage, { generateMetadata } from './tibianus-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12LowExpServerKeywordPage />;
}
