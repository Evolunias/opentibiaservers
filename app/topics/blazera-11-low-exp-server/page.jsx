import Blazera11LowExpServerKeywordPage, { generateMetadata } from './blazera-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11LowExpServerKeywordPage />;
}
