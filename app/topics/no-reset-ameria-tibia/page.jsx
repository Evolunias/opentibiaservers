import NoResetAmeriaTibiaKeywordPage, { generateMetadata } from './no-reset-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaTibiaKeywordPage />;
}
