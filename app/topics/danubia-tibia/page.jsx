import DanubiaTibiaKeywordPage, { generateMetadata } from './danubia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaTibiaKeywordPage />;
}
