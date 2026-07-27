import Luminera14LowExpServerKeywordPage, { generateMetadata } from './luminera-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14LowExpServerKeywordPage />;
}
