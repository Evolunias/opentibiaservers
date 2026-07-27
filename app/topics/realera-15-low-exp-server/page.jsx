import Realera15LowExpServerKeywordPage, { generateMetadata } from './realera-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15LowExpServerKeywordPage />;
}
