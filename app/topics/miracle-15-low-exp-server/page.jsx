import Miracle15LowExpServerKeywordPage, { generateMetadata } from './miracle-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15LowExpServerKeywordPage />;
}
