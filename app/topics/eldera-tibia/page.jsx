import ElderaTibiaKeywordPage, { generateMetadata } from './eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaTibiaKeywordPage />;
}
