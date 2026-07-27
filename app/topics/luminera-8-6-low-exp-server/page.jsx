import Luminera86LowExpServerKeywordPage, { generateMetadata } from './luminera-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86LowExpServerKeywordPage />;
}
