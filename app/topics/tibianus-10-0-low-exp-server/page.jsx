import Tibianus100LowExpServerKeywordPage, { generateMetadata } from './tibianus-10-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus100LowExpServerKeywordPage />;
}
