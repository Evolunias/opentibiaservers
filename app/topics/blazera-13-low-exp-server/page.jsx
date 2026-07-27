import Blazera13LowExpServerKeywordPage, { generateMetadata } from './blazera-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13LowExpServerKeywordPage />;
}
