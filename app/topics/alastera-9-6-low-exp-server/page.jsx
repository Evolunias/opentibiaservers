import Alastera96LowExpServerKeywordPage, { generateMetadata } from './alastera-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96LowExpServerKeywordPage />;
}
