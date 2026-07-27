import Oxygenot15LowExpServerKeywordPage, { generateMetadata } from './oxygenot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15LowExpServerKeywordPage />;
}
