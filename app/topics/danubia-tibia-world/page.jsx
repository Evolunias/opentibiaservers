import DanubiaTibiaWorldKeywordPage, { generateMetadata } from './danubia-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaTibiaWorldKeywordPage />;
}
