import Blazera15LowExpServerKeywordPage, { generateMetadata } from './blazera-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15LowExpServerKeywordPage />;
}
