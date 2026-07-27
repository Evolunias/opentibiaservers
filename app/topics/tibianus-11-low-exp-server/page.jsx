import Tibianus11LowExpServerKeywordPage, { generateMetadata } from './tibianus-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11LowExpServerKeywordPage />;
}
