import Luminera11HighExpServerKeywordPage, { generateMetadata } from './luminera-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11HighExpServerKeywordPage />;
}
