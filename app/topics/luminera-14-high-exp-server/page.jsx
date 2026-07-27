import Luminera14HighExpServerKeywordPage, { generateMetadata } from './luminera-14-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14HighExpServerKeywordPage />;
}
