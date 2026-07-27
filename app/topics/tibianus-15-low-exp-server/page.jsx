import Tibianus15LowExpServerKeywordPage, { generateMetadata } from './tibianus-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15LowExpServerKeywordPage />;
}
