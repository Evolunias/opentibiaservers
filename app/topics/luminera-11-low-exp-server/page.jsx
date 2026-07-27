import Luminera11LowExpServerKeywordPage, { generateMetadata } from './luminera-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11LowExpServerKeywordPage />;
}
