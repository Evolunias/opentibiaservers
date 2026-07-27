import Unline15LowExpServerKeywordPage, { generateMetadata } from './unline-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15LowExpServerKeywordPage />;
}
