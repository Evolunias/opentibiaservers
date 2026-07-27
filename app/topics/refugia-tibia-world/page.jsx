import RefugiaTibiaWorldKeywordPage, { generateMetadata } from './refugia-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaTibiaWorldKeywordPage />;
}
