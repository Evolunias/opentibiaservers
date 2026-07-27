import NoResetXanteriaOpenTibiaKeywordPage, { generateMetadata } from './no-reset-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaOpenTibiaKeywordPage />;
}
