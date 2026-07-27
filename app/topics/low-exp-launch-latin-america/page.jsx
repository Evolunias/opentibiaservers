import LowExpLaunchLatinAmericaKeywordPage, { generateMetadata } from './low-exp-launch-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchLatinAmericaKeywordPage />;
}
